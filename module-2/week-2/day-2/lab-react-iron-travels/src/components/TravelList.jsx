import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);

  function handleDeletePlan(planId) {
    console.log("deleted", planId);
    // create a new variable that is missing the plan with the id
    const filteredPlans = plans.filter((onePlan) => onePlan.id !== planId);
    //set the state to equal the filtered plans
    setPlans(filteredPlans);
  }

  return (
    <div>
      {plans.map((onePlan) => {
        return (
          <div key={onePlan.id} className="plan-card">
            <img
              alt="location picture"
              src={onePlan.image}
              className="plan-image"
            />
            <section>
              <h5>
                {onePlan.destination} ({onePlan.days} days)
              </h5>
              <p>{onePlan.description}</p>
              <p>Price: {onePlan.totalCost} $</p>
              <article>
                {onePlan.totalCost < 350 ? (
                  <button id="great-deal">Great Deal</button>
                ) : onePlan.totalCost > 1500 ? (
                  <button id="premium">Premium</button>
                ) : null}

                {onePlan.allInclusive && (
                  <button id="all-inclusive">All Inclusive</button>
                )}
              </article>
              <button
                onClick={() => {
                  handleDeletePlan(onePlan.id);
                }}
              >
                Delete
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
};
export default TravelList;
