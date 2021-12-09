import { useState, useEffect } from "react";
import { fileService }  from '../services/file.service';

const PinTable = () => {
    const [pins, setPins] = useState([]);
    let [videoOfDatabase, setVideoOfDatabase] = useState([]);
    let photoOfDatabase = [];


    useEffect(() => {
        fileService.getAllFile()
        .then((res) => {
          console.log("RES: ", res);
          photoOfDatabase = res.reverse().filter((item) => {
            if(item.originalName.split(".")[1] !== 'mp4')
              return true;
            return false;
          });
      
          videoOfDatabase = res.reverse().filter((item) => {
            if(item.originalName.split(".")[1] === 'mp4')
              return true;
            return false;
          });
          setVideoOfDatabase(videoOfDatabase);
      
          setPins([...photoOfDatabase]);
        })
        .catch(err => {
          console.log("ERROR: ", err.message);
        });
       }, []);

    return (
        <table>
            <tr>
                <th>Ảnh</th>
                <th>Nội dung</th>
                <th>Hành động</th>
            </tr>

            {pins.map((pin, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <img src={pin.link} style={{width: 100}}/>
                        </td>
                        <td>{pin.status}</td>
                        <td>
                            <button>Xóa</button>
                        </td>
                    </tr>
                )
            })}

            {videoOfDatabase.map((pin, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <video 
                                loop
                                preload="auto"
                                onMouseOver={event => event.target.play()}
                                onMouseOut={event => event.target.pause()}
                                alt="video_alt"
                                src={pin.link}
                                style={{width: 100}}
                            >
                                <source src="https://drive.google.com/uc?id=1dE_dbgxeP_EMJOqLYu5Mq3NxGrQu1z2X" type="video/mp4"/>
                            </video>
                        </td>
                        <td>{pin.status}</td>
                        <td>
                            <button>Xóa</button>
                        </td>
                    </tr>
                )
            })}
        </table>
    );
}

export default PinTable;