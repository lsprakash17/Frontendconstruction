import React from "react";
import "../css/Team.css"; 

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
Roopesh gowda R
BE in civil engineering (banglore institute of technology)
Home town pandavapura mandya, residence in banglore rajaji Nagar. Working civil field from past 5 years. Executed around 10 residential buildings 
2 industrial PB building 2 commercial buildings and also worked in comercial industrial project and also in NCA stadium near bagluru project.
<br />
Madhushudan H R, Owner of HSR hotels pvt ltd. 
I have been in hotel field around 25 years managing 3 major restaurant (udupi ruchi) and 5 hotel 
          </p>
        </div>
<div className="flex flex-col items-center gap-6">
  {props.data?.map((d, i) => (
    <div key={`${d.name}-${i}`} className="w-full max-w-2xl">
      <img src={d.img} alt={d.name} className="w-full h-auto team-img" />
      <div className="caption text-center mt-2">
        <h4 className="text-xl font-semibold">{d.name}</h4>
        <p className="text-gray-600">{d.job}</p>
      </div>
    </div>
  ))}
</div>



      </div>
    </div>
  );
};
