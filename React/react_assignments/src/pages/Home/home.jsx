import './home_welcome.css';
import './home_images.css';
import strengthImage from '../../assets/homePage/strenght_male_female_photo.jpeg';
import runningImage from '../../assets/homePage/running_track_photo.jpeg';
import crossfitImage from '../../assets/homePage/crossfit_photo.jpeg';
import { Link } from "react-router-dom";

function Home() {
    return(
        <>
            <section className='welcome_section'>
                <h2>
                    Welcome to Fitness Application
                </h2>
                <p>
                    Your journey to fitness starts here. Track workouts, monitor progress, and achieve your goals!
                </p>
                
            </section>

            <section className='image_grid'>
                <div className='image_container'>
                    <div className='workout_image'>
                        <img src={strengthImage} alt='strength_photo_stock' className='image'/>
                        <Link to="/strength" className='link_button'>
                            Track Strength Workouts   
                        </Link>
                    </div>

                    <div className='workout_image'>
                        <img src={runningImage} alt='running_photo_stock' className='image'/>
                        <button href='#running' className='link_button'>Log a run</button>
                    </div>

                    <div className='workout_image'>
                        <img src={crossfitImage} alt='crossfit_photo_stock' className='image'/>
                        <button href='#crosfit' className='link_button'>Log a metcon</button>
                    </div>

                    <div className='workout_image'>
                        <img src={crossfitImage} alt='performance_photo_stock' className='image'/>
                        <button href='#performance' className='link_button'>Perfomance</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;