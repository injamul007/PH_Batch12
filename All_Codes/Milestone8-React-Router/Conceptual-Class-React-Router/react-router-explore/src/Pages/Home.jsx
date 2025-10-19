import PlantCard from '../Components/PlantCard';
import { useLoaderData } from 'react-router';


const Home = () => {
  const {plants} = useLoaderData();

  return (
    <div className='lg:container w-[90%] mx-auto my-12'>
      <h2 className='text-4xl text-center'>Total Plants: {plants.length}</h2>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-6'>
        {plants.map(plant => <PlantCard key={plant?.id} plant={plant}></PlantCard>)}
      </div>
    </div>
  );
};

export default Home;