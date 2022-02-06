import React from "react";
import { Slide } from "react-reveal";
import Card from "../Card/Card";
import SkillItem from "./SkillItem";

function SkillCard({ skillData }) {
  return (
    <Card>
      <h3 className="card-heading fourth-heading mb-4">{skillData.heading}</h3>
      {skillData.skills.map((item, index) => {
        return <SkillItem key={index} data={item} />;
      })}
    </Card>
  );
}

export default SkillCard;
