import './SkillItem.css'
import { ProgressBar } from 'react-bootstrap';


const SkillItem = ({ data }) => {
    console.log(data)
    return (
        <div className="skill-item">
            <div className="skill-name">
                {data.name}
            </div>
            <ProgressBar variant="warning" now={data.progress} style={{ height: '10px', marginTop: '5px' }} />
        </div>
    );
}

export default SkillItem;