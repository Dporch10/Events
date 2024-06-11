
import "./Conference.css";
const Conference = () => {
    return (
        <>
        <div className="container conference">
            <div className="row justify-content-center">
                <div className="col-sm-9">
            <h6>Next Event Starts In</h6>
            <p>
                Get ready as our next conference will be coming around soon. The Countdown has begun! Mark your calendars and prepare for the special event. Stay tuned for updates and registration details. The Next Conference starts in:
            </p>
            <h6 id="ConferenceTimingClock"></h6>
                </div>
            </div>
        </div>    
        </>
    );
    
};
    var CountDownDate = new Date("June 20, 2024").getTime();
   //console.log(CountDownDate); 
    var x = setInterval(() => {
        var Now = new Date().getTime();
        var Dis= CountDownDate - Now;

        //console.log(Dis);
        var Days = Math.floor(Dis/(1000 * 60 * 60 * 24));
        var Hours = Math.floor((Dis % (1000 * 60 * 60 * 24)));
        var Min = Math.floor((Dis % (1000 * 60 * 60)) / (1000 * 60));
        var Sec = Math.floor ((Dis % (1000* 60)) / 1000);

        document.getElementById("ConferenceTimingClock").innerHTML = Days + "D- " + Hours + "H- " + Min + "M- " + Sec + "S";
    }, 1000)

    // To prevent from this
    if (Dis < 0) {
        clearInterval(X);
        document.getElementById("ConferenceTimingClock").innerHTML = "SORRY THE EVENT IS OVER"
    }
    export default Conference;