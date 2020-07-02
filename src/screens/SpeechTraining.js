import React from 'react';
import '../css/SpeechTraining.css';
import TextArea from '../components/TextArea';

const SpeechTraining = () => {

    const record = () => {

    }

    const stop = () => {

    }

    const retry = () => {

    }

    const skip = () => {

    }

    const submit = () => {

    }

    return (
        <div className="sizer">
            <div className='heading'>
                <div className='title'>Custom Speech Training</div>
                <div className='divider'></div>
            </div>

            <div className='body'>
                <TextArea text='This is the text we will ask people to speak...' />
            </div>
            
            <div className="buttonBar">
                <button className="record" onClick={ record }>
                    Record
                </button>
                <button style={{ display: 'none' }} className="stop" onClick={ stop }>
                    Stop
                </button>
                <button className="retry" onClick={ retry }>
                    Retry
                </button>
                <button className="skip" onClick={ skip }>
                    Skip
                </button>
                <button className="submit" onClick={ submit }>
                    Submit
                </button>                                                                
            </div>

            <div className="instructions">
                <span className="header">Instructions</span>
                <li>Thank you for helping us train this custom speech recognition model for use in the transcription of clinical notes!</li>
                <li>Please make sure your microphone is operational</li>
                <li>Click on Record when you're ready to speak the text in the box above and Stop when you've completed the recording</li>
                <li>Click Submit when you're satisfied</li>
                <li>One or two misspoken workds is alright but if there are several, please Retry or Skip</li>
            </div>

        </div>
    );
}

export default SpeechTraining;