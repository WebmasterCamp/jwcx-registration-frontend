import React, { Component } from 'react';
import StepList from '../components/step-list.js';

export default class verify extends Component{

    constructor(props){
        super(props);
        this.state = {
            Step1 : {
                name: "JW Cx",
                age: "18",
                birthdate: "30/3/2018",
                religion: "Loli",
                class: "4",
                school : "Another",
                address : "Thailand",
                number : "191",
                email : "prayutgg",
                socialMedia : "prayut@face",
                disease : "-",
                allergyFood : "-",
                allergyMedicine : "-",
                shirtSize : "L",
                activities : "สอวนคอม /t sd",
                    },
            Step2 : {
                name : "YW C15",
                parentRelation : "I'm your father",
                parentNumber : "191"
            },
            Step3 : {
                Q1 : "Ans1",
                Q2 : "Ans2",
                Q3 : "Ans3",
            },
            Step4 : {
                Q1 : "Ans1",
                Q2 : "Ans2",
                Q3 : "Ans3",
            },
        }
    }

    render(){
        return(
            <div>
                <div className="row">
                    <StepList className="offset-2 col-8" titles={['STEP 0', 'STEP 1', 'STEP 2', 'STEP 3']} currentStep={1} />
                </div>
                
                <div className="row">
                    <h2>ยืนยันข้อมูล</h2>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                    <div className="text-content" ><h3>ข้อมูลส่วนตัว</h3></div>
                    </div>
                    <div className="col">
                        <div className="text-content" ><h4>ชื่อ : {this.state.Step1.name}</h4></div>
                        <div className="text-content" ><h4>อายุ : {this.state.Step1.age}</h4></div>
                        <div className="text-content" ><h4>วันเกิด : {this.state.Step1.birthdate}</h4></div>
                        <div className="text-content" ><h4>ศาสนา : {this.state.Step1.religion}</h4></div>
                        <div className="text-content" ><h4>ระดับชั้น : {this.state.Step1.class}</h4></div>
                        <div className="text-content" ><h4>โรงเรียน : {this.state.Step1.school}</h4></div>
                        <div className="text-content" ><h4>ที่อยู่ : {this.state.Step1.address}</h4></div>
                        <div className="text-content" ><h4>เบอร์โทร : {this.state.Step1.phone}</h4></div>
                        <div className="text-content" ><h4>อีเมล์ : {this.state.Step1.email}</h4></div>
                        <div className="text-content" ><h4>Social Media ต่าง ๆ : {this.state.Step1.socialMedia}</h4></div>
                        <div className="text-content" ><h4>โรคประจำตัว : {this.state.Step1.disease}</h4></div>
                        <div className="text-content" ><h4>อาหารที่แพ้ : {this.state.Step1.allergyFood}</h4></div>
                        <div className="text-content" ><h4>ยาที่แพ้ : {this.state.Step1.allergyMedicine}</h4></div>
                        <div className="text-content" ><h4>ไซส์เสื้อ : {this.state.Step1.shirtSize}</h4></div>
                        <div className="text-content" ><h4>กิจกรรมหรือผลงานที่น้อง ๆ เคยทำ หรือเคยเข้าร่วม : {this.state.Step1.activities}</h4></div>
                    </div>
                    
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <div className="text-content" ><h3>ข้อมูลผู้ปกครอง</h3></div>
                    </div>
                    <div className="col">
                        <div className="text-content" ><h4>ชื่อ : {this.state.Step2.name}</h4></div>
                        <div className="text-content" ><h4>ความเกี่ยวข้อง : {this.state.Step2.parentRelation}</h4></div>
                        <div className="text-content" ><h4>เบอร์โทร : {this.state.Step2.parentNumber}</h4></div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="text-content" ><div className="col"><h3>คำถามส่วนกลาง</h3></div></div>
                    <div className="text-content" >
                        <br />
                        <br />
                        <div className="row" ><h4>คำถาม ข้อ 1</h4></div>
                        <div className="row" ><h4>คำตอบ {this.state.Step3.Q1}</h4></div>
                        <div className="row" ><h4>คำถาม ข้อ 2</h4></div>
                        <div className="row" ><h4>คำตอบ {this.state.Step3.Q2}</h4></div>
                        <div className="row" ><h4>คำถาม ข้อ 3</h4></div>
                        <div className="row" ><h4>คำตอบ {this.state.Step3.Q3}</h4></div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="text-content" ><div className="col"><h3>คำถามแยกสาย</h3></div></div>
                    <div className="text-content" >
                        <br />
                        <br />
                        <div className="row" ><h4>คำถาม ข้อ 1</h4></div>
                        <div className="row" ><h4>คำตอบ {this.state.Step4.Q1}</h4></div>
                        <div className="row" ><h4>คำถาม ข้อ 2</h4></div>
                        <div className="row" ><h4>คำตอบ {this.state.Step4.Q2}</h4></div>
                        <div className="row" ><h4>คำถาม ข้อ 3</h4></div>
                        <div className="row" ><h4>คำตอบ {this.state.Step4.Q3}</h4></div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div><button href="#" className="button">ย้อนกลับแก้ไข</button></div>
                    
                    <div><button href="#" className="button">ยืนยันการสมัคร</button></div>
                </div>
            </div>
        )
    }



} 