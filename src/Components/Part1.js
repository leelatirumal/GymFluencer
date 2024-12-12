import React from 'react'
import './Part1.css'
import Part3 from './Part3'
import Footer from './Footer'
import Part2 from './Part2'
function Part1() {
  return (
    <>
    <div className='part1'>
        <h3 className='text-center' style={{color:'orange'}}>Discover Our App's Key Features</h3>
        <div id='row1'>
            <div id='row1_box' >
                <h3>EffortLess <br/> Workout Log </h3>
                <p>The simplest way to track progress is by keeping a fitness journal. 
                    Note down your exercises, reps, sets, weights for strength training,
                     and durations for cardio sessions.
                </p>
            <div><img src='https://i.etsystatic.com/44949369/r/il/48f038/5236673129/il_300x300.5236673129_krq9.jpg' /></div>
            </div>

            <div id='row1_box' >
                <h3>Accurate <br/>Rep Counting</h3>
                <p>utilize advanced motion detection and computer vision technology, allowing them to 
                automatically identify and count repetitions of an exercise with minimal manual input</p>
               <div> <img src='https://outliveforever.com/wp-content/uploads/2020/03/counting-reps-in-the-tank-reserve-failure-lift-weights.jpg' /> 
                </div>
            </div>

            <div id='row1_box' >
                <h3>Calorie <br/>Calculation</h3>
                <p>You can track how many calories you eat each day.
                     The app will calculate this based on the nutritional information provided on the labels of foodstuffs.</p>
             <div> <img src='https://www.cnet.com/a/img/resize/e3d29fa4b61393fd5af3574957d90e9362424303/hub/2023/02/09/a5dda496-d171-4d65-83cd-21d8a6ba4521/gettyimages-1345444168.jpg?auto=webp&fit=crop&height=675&width=1200' /></div>
              </div>
        </div>
        <br/>
        <div id='row2'>
            <div id='row2_box'>
                <h3>Personalized <br/>Diet Plan</h3>
                <p>The patient's personalised diet should take into consideration their individual characteristics such as 
                age, gender, height/weight, BMI, diet and environment.</p>
              <div>  <img src='https://championsgym.ie/wp-content/uploads/2021/11/foods-to-eat.jpg' /> </div>
            </div>

            <div id='row2_box'>
                <h3>Personalized<br/> WorkOut</h3>
                <p>Personalized fitness sessions tailor workouts to individual goals and physical conditions,
                     enhancing engagement and reducing injury risks.
                </p>
             <div>  <img src='https://static.wixstatic.com/media/d2ff3c_57c99388274c460ba6e833edc3092330~mv2.jpg/v1/fill/w_568,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d2ff3c_57c99388274c460ba6e833edc3092330~mv2.jpg' /> 
                </div>            
            </div>
        </div>
        </div>
        <h1 className="container"style={{textAlign:'center',backgroundColor:'black',color:'white'}}>Steps To Get Fit</h1>
        <Part2/>
        <Footer/>
    </>
  )
}

export default Part1
