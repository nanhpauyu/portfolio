import BarLocation from "./charts/BarLocation";
import DonutPlatform from "./charts/DonutPlatform";
import DonutRemote from "./charts/DonutRemote";
import DonutStatus from "./charts/DonutStatus";
import LineDate from "./charts/LineDate";

function JSJourney(data) {
    return (
        <>{
            Array.from(data.data).length == 0 || Array.from(data.data).length == undefined ?
                <section className="resume-section" id="career">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Career Exploration Process</h2>
                        <p> No Data Yet</p>
                    </div>
                </section>
                :
                <section className="resume-section" id="career">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Career Exploration Process</h2>
                        <div className="row">
                            <div className="col"><DonutStatus data={data.data} /></div>
                            <div className="col"><DonutRemote data={data.data} /></div>
                        </div>
                        <div className="row">
                            <div className="col"><DonutPlatform data={data.data} /></div>
                            <div className="col"></div>
                        </div>
                        <BarLocation data={data.data} />
                        <LineDate data={data.data} />
                    </div>

                </section>
        }
        </>
    )
} export default JSJourney;