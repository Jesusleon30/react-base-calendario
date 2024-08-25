import "./css/index.css";
import "./js/app.js"
import {Calendar, dayjsLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from "dayjs";
import {CiCalendarDate} from "react-icons/ci"

export default function Logo() {

  const localizer = dayjsLocalizer(dayjs)

  // aca podemos crear mas eventos y tambien pasarle a una base de datos
  const events =[
    {
      start: dayjs('2024-08-18T12:00:00').toDate(),
      end: dayjs('2024-08-18T13:00:00').toDate(),
      title: "Evento 1"
    },
    //otro evento mas 
    {
      start: dayjs('2024-08-20T08:30:00').toDate(),
      end: dayjs('2024-08-20T09:30:00').toDate(),
      title: "Evento 2"
    },
  ]

  // agregar components a los eventos  es. un icon de calendario junto al events
  const components = {
    event:props => {
      console.log(props)
      return <div>
        <CiCalendarDate/>
        {props.title}
      </div>
    }
  }




  return (
    <>
      <section>
        <div>
          <h1 className="testo">function logo desde main</h1>
        </div>
        <div  className="calendario" >
          <Calendar  

          localizer={localizer}
          // lamamos al evento
          events={events}
          // modifica calendario aca podemos elegir que hacer ver 
          views={["month","week","day","agenda"]}
          // hacer aparecer di default lo que quiero es. el mes, semana, dia. cada vez cuando carga el calendario
          //defaultView = "week"

          // hacer ver solo el mes ejemplo
          //toolbar={false} // asi se borra el calendario a false
          //defaultView = "month" // junto con este le podemos decir solo de hacer ver el mes junto 

          toolbar={true}
          default="month"

          // controlar un rango de tiempo por ejemplo para un orario de trabajo ...
          min={dayjs('2024-08-20T05:00:00').toDate()}
          max={dayjs('2024-08-20T19:00:00').toDate()}

          // hacer ver como quiero que se vea la data del dia 
          formats={{
            dayHeaderFormat: date => {
              console.log(date)
              return dayjs(date).format("DD/MM/YYYY")
            }
          }}
          components={components}





          
          
          />
        </div>
      
      </section>
    </>
  );
}
