import React, { useEffect, useState } from 'react';
import '../agenda/agenda.css';

const Agenda = () => {
    const [events, setEvents] = useState([]);

    const getMonthName = (month) => {
        const monthNames = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        return monthNames[month];
    };

    useEffect(() => {
        const daysContainer = document.getElementById('days');
        const monthElement = document.getElementById('month');
        const prevMonthBtn = document.getElementById('prevMonth');
        const nextMonthBtn = document.getElementById('nextMonth');
        const eventForm = document.querySelector('.event-form');
        const calendar = document.querySelector('.calendar');
        const eventDateInput = document.getElementById('eventDate');
        const eventDescriptionInput = document.getElementById('eventDescription');

        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        const getEventsForDate = (date) => {
            return events.filter(event => isSameDay(event.date, date));
        };

        const hideEventForm = () => {
            eventForm.style.display = 'none';
            calendar.style.filter = 'brightness(1)';
        };

        const renderCalendar = (month, year) => {
            daysContainer.innerHTML = '';
            monthElement.innerText = `${getMonthName(month)} ${year}`;

            const firstDayOfMonth = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const totalDaysInCalendar = 6 * 7;

            for (let i = 0; i < firstDayOfMonth; i++) {
                const emptyDay = document.createElement('li');
                daysContainer.appendChild(emptyDay);
            }

            for (let day = 1; day <= totalDaysInCalendar; day++) {
                const dayElement = document.createElement('li');
                if (day <= daysInMonth) {
                    dayElement.innerText = day;
                    const date = new Date(year, month, day);

                    if (getEventsForDate(date).length > 0) {
                        dayElement.classList.add('has-events');
                    }

                    dayElement.addEventListener('click', () => {
                        const selectedDate = new Date(year, month, day);
                        renderEvents(selectedDate);
                        showEventForm(selectedDate);
                    });
                }
                daysContainer.appendChild(dayElement);
            }
        };

        renderCalendar(currentMonth, currentYear);
        hideEventForm();

        const updateMonth = (monthOffset) => {
            currentMonth += monthOffset;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            } else if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar(currentMonth, currentYear);
        };

        const formatDateTime = (date) => {
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            const formattedDateTime = new Intl.DateTimeFormat('pt-BR', options).format(date);
            return formattedDateTime;
        };

        const renderEvents = () => {
            // Ordenar os eventos por data antes de renderizar
            events.sort((a, b) => a.date - b.date);

            let html = '<ul>';
    
            events.forEach(event => {
                const formattedDateTime = formatDateTime(event.date);
                html += `<li><strong>${formattedDateTime}:</strong> ${event.description}</li>`;
            });
    
            html += '</ul>';
            document.getElementById('eventsContainer').innerHTML = html;
        };    

        const isSameDay = (date1, date2) => {
            return (
                date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate()
            );
        };

        const showEventForm = (date) => {
            eventDateInput.value = formatDate(date);
            eventDescriptionInput.value = '';
            eventForm.style.display = 'block';
            calendar.style.filter = 'brightness(0.5)';
        };

      const addEvent = (date, description) => {
        const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    
        const existingEventIndex = events.findIndex(event => isSameDay(event.date, formattedDate));
    
        if (existingEventIndex !== -1) {
            events[existingEventIndex].description = description;
        } else {
            events.push({ date: formattedDate, description });
            setEvents([...events, { date: formattedDate, description }]);
        }
      };

        const formatDate = (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        };

        prevMonthBtn.addEventListener('click', () => {
            updateMonth(-1);
        });

        nextMonthBtn.addEventListener('click', () => {
            updateMonth(1);
        });

        document.getElementById('addEventBtn').addEventListener('click', () => {
          const selectedDate = new Date(eventDateInput.value);
          const eventDescription = eventDescriptionInput.value;
          if (eventDescription.trim() !== '') {
              addEvent(selectedDate, eventDescription);
              renderEvents(selectedDate);
              renderCalendar(currentMonth, currentYear);
              hideEventForm();
          } else {
              alert('Por favor, insira uma descrição para o lembrete.');
          }
        });

        document.getElementById('closeEventFormBtn').addEventListener('click', () => {
            eventForm.style.display = 'none';
            calendar.style.filter = 'brightness(1)';
        });

        // Lembre-se de limpar os event listeners ao desmontar o componente
        return () => {
            prevMonthBtn.removeEventListener('click', updateMonth);
            nextMonthBtn.removeEventListener('click', updateMonth);
        };
    }, []);

    return (
        <div id="container-calendar">
            <div id="container-calendar-header">
                <h1><i class="bi bi-calendar-date"></i> Agenda</h1>
                <nav id="menu-nav-agenda">
                    <a href="#" class="menu-selection">Lembretes</a>
                    <a href="#">Aniversários<i class="bi bi-caret-down-fill"></i></a>
                </nav>
            </div>

            <div className="calendar">
                <div className="month">
                    <span id="prevMonth">&#10094;</span>
                    <h2 id="month">Mês Atual</h2>
                    <span id="nextMonth">&#10095;</span>
                </div>
                <ul className="weekdays">
                    <li>Domingo</li>
                    <li>Segunda</li>
                    <li>Terça</li>
                    <li>Quarta</li>
                    <li>Quinta</li>
                    <li>Sexta</li>
                    <li>Sábado</li>
                </ul>
                <ul className="days" id="days"></ul>
            </div>

            <div className="event-form">
                <h3>Adicionar Evento</h3>
                <label htmlFor="eventDate">Data:</label>
                <input type="date" id="eventDate" required />
                <label htmlFor="eventDescription">Descrição:</label>
                <input type="text" id="eventDescription" required />
                <div id='container-event-actionBtn'>
                  <button id="addEventBtn">Adicionar</button>
                  <button id="closeEventFormBtn">Fechar</button>
                </div>
            </div>

            <div id="eventsContainer"></div>
        </div>
    );
};

export default Agenda;
