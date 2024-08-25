import "./css/index.css";
import {Calendar, dayjsLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from "dayjs";

export default function Logo() {

  const localizer = dayjsLocalizer(dayjs)


  return (
    <>
      <section>
        <div>
          <h1 className="testo">function logo desde main</h1>
        </div>
        <div  className="calendario" >
          <Calendar  

          localizer={localizer}

          
          
          />
        </div>
      
      </section>
    </>
  );
}
