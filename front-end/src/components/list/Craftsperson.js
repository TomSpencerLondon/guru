import React from "react";

export default function Craftsperson({ craftsperson }) {
  return (
    <div className="row">
      <div className="col-lg-3">
        <h2>
          {craftsperson.firstName} {craftsperson.lastName}
        </h2>
      </div>
      <div className="col-lg-3">
        <h5><span className="mentorLabel">Mentored by:</span><br />
        <span className="mentor">
          {craftsperson.mentor
            ? craftsperson.mentor.firstName + " " + craftsperson.mentor.lastName
            : "-"}{" "}
        </span></h5>
      </div>
      <div className="col-lg-3">
              <h5><span className="meetingLabel">Last Meeting:</span><br />
              <span className="lastMeeting" data-testid="lastMeetingValue">
                {craftsperson.lastMeeting
                  ? craftsperson.lastMeeting
                  : "-"}
              </span></h5>
            </div>
      <div className="col-lg-3">
        <span className="menteeLabel">Mentees: </span>
        <span className="mentee-count">
          <h2>{craftsperson.mentees ? craftsperson.mentees.length : "0"}</h2>
        </span>
      </div>
    </div>
  );
}
