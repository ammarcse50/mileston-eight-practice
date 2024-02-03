
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

    const gymData = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 49.99,
          "features": [
            "All Basic Membership features",
            "Free fitness classes",
            "Sauna and spa access"
          ]
        },
        {
          "id": 3,
          "name": "VIP Membership",
          "price": 79.99,
          "features": [
            "All Premium Membership features",
            "Personal trainer sessions",
            "Nutrition consultation"
          ]
        },
        {
          "id": 4,
          "name": "Day Pass",
          "price": 9.99,
          "features": [
            "One-day access to gym facilities",
            "No commitment required"
          ]
        },
        {
          "id": 5,
          "name": "Family Membership",
          "price": 99.99,
          "features": [
            "Access for entire family",
            "Discounts on additional services",
            "Family-friendly classes"
          ]
        }
      ];
      
    return (
        <div className=''>
           <h2 className='text-5xl p-3'>Best Prices in town</h2>
            
           <div className="grid md:grid-cols-3 gap-4 p-3"> {
            gymData.map(data=><PriceOption key={data.id} option={data}></PriceOption>)
        }
</div>
       
            
        </div>
    );
};

export default PriceOptions;