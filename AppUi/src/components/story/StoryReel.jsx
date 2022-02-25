import React from 'react';
import "./StoryReel.css";
import Story from './Story';
import { useContext } from 'react';
import { DisplayStoryContext } from './StoryContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';
//import FirstStory from './FirstStory';
import StoryDisplay from './StoryDisplay';

const StoryReel = () => {
    const story = useContext(DisplayStoryContext);
    console.log(story);
    return (
      <div>
        {/* <div className="displayStory" style={{ display: storyDiv ? "block" : "none" }}>
                <StoryDisplay />
            </div> */}
        {/* <div style={{ display: !storyDiv ? "block" : "none" }} >

                <div className="storyreel">

                    <div class="story" style={{
                        backgroundImage: "url(https://cdn.pixabay.com/photo/2017/07/31/22/45/fashion-2561753_1280.jpg)",
                        backgroundRepeat: "no-repeat"
                    }}>
                        <div className='circlediv'>
                            <AddCircleIcon className="circleicon" />
                        </div>
                        <div className='createStory' >
                            <h4>Create story</h4>
                        </div>

                    </div>
                    <Story
                        image="https://dynamic-image-resizer.sharechat.com/imageResizer/smartgirldp_129f2329_1617124587006_sc_cmprsd_40.jpg"
                        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1Y2NZTvaqWLpb5yVO92rUwyFWCwNl_RYWvTTAFx7HOe6O9dGJEzgi98dwGrBjmBusYI&usqp=CAU"
                        title="Salini Shah"
                    />
                    <Story
                        image="https://i.pinimg.com/236x/bb/61/3d/bb613d1c41b978d4b2a5cb2285e5464a.jpg"
                        profileSrc="http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/05/Stylish-Whatsapp-Dp-Images-4-1.jpg"
                        title="Abhishek Abhi"
                    />
                    <Story
                        image="https://dp.profilepics.in/dp/2020/cute-baby-girl-images-hd/cute-baby-girl-images-01.jpg"
                        profileSrc="https://www.finetoshine.com/wp-content/uploads/2020/04/Hidden-Face-Girls-Dp.jpg"
                        title="Alia Gupta"
                    />
                    <Story
                        image="https://i.pinimg.com/originals/87/e5/62/87e562c7049f90b890ff6287bb01a79b.jpg"
                        profileSrc="https://i.pinimg.com/736x/14/b2/fe/14b2fee0e877f76c0a5b1862e6abcda2.jpg"
                        title="Raj Agrawal"
                    />
                </div>
            </div> */}
      </div>
    );
};

export default StoryReel;