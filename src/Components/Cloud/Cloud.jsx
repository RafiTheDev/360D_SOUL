import '../../Styles/Cloud/Cloud.css';
const Cloud = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-20 mb-20">
            
            <div>
            <div className="cloud-1 text-right  pr-8 pt-8">
                <h1 className='text-2xl mb-2'>Oracle Cloud</h1>
                <h1 className='text-4xl font-semibold mb-2'>Applications</h1>
                <p>A complete suite of cloud applications delivering consistent processes and data across your business</p>
                <button className="bg-white text-black border-4 mb-2">Explore Cloud Apps</button>
            </div>
            </div>
            
            <div>
            <div className="cloud-2 text-left pl-8 pt-8">
                <h1 className='text-2xl mb-2'>Oracle Cloud</h1>
                <h1 className='text-4xl font-semibold mb-2'>Applications</h1>
                <p>An automated secure platform for migrating enterprise workloads and building new cloud native apps</p>
                <button className="bg-white text-black border-4 mb-2">Explore OCI</button>
                
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Cloud