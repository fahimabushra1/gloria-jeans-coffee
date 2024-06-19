

const Accordian = () => {
    return (
        <div className="my-8" id="faqs">
            <div className="collapse collapse-arrow">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium text-[#431407]">
    How can I purchase coffee from Gloria jeans coffee ?
  </div>
  <div className="collapse-content"> 
    <p>You can purchase our products both online and offline.</p>
  </div>
</div>
<div className="collapse collapse-arrow">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium text-[#431407]">
   How many outlets of Gloria jeans coffee in bangladesh?
  </div>
  <div className="collapse-content"> 
    <p>We have 3 outlets in Bangladesh. </p>
  </div>
</div>
<div className="collapse collapse-arrow">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium text-[#431407]">
  What kind of coffee do you sell?
  </div>
  <div className="collapse-content"> 
    <p>We sell different types of coffees.They are brought from different countries.</p>
  </div>
</div>
        </div>
    );
};

export default Accordian;