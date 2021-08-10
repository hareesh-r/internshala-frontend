import React, { Component } from 'react'
import FooterColumns from './FooterColumns'
import "../App.css"
export class FooterRows extends Component {
    render() {
        var obj1 = [
            "Internships by places",
            "Internship in India",
            "Internship in Delhi",
            "Internship in Bangalore",
            "Internship in Hyderabad",
            "Internship in Mumbai",
            "Internship in Chennai",
            "Internship in Gurgaon",
            "Internship in Kolkata",
            "Virtual internship",
        ];
        var obj2 = [
            "Internship by Stream",
            "Computer Science Internship",
            "Electronics Internship",
            "Mechanical Internship",
            "Civil Internship",
            "Marketing Internship",
            "Chemical Internship",
            "Finance Internship",
            "Summer Research Fellowship",
            "Campus Ambassador Program",
        ];
        var obj3 = [
            "Online Trainings ",
            "Programming with Python",
            "Digital Marketing",
            "Web Development",
            "Machine Learning",
            "Advanced Excel",
            "Ethical Hacking",
            "AutoCAD",
            "Creative Writing",
            "Data Science"
        ];
        var obj4 = [
            "About Internshala",
            "About us",
            "We're hiring",
            "Hire interns for your company",
            "Team Diary",
            "Blog",
            "Our Services",
            "Terms & Conditions",
            "Privacy",
            "Contact us",
        ];
        return (
            <div className="FooterRows">
                <FooterColumns text={obj1}/>
                <FooterColumns text={obj2} />
                <FooterColumns text={obj3} />
                <FooterColumns text={obj4} />
            </div>
        )
    }
}

export default FooterRows
