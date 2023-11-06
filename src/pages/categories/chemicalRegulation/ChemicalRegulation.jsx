import ImportantLinks from "../../../components/ImportantLinks/ImportantLinks"
import "./chemical.css"
function ChemicalRegulation() {
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0 service_menu">
                        <ImportantLinks />
                    </div>
                    <div className=" col-lg-9 col-md-9 col-12 bg-white p-3 service_content">
                        <div>
                            <h3 className="heading">Cleaning Products and Chemical Regulation</h3>
                        </div>
                        <div className="my-3" style={{textAlign:"justify"}}>
                            <p >Cleaning products such as bathroom cleaners, glass cleaners, disinfectants, and other chemical cleaners are the most highly regulated product category in the commercial cleaning industry. AFM members comply with a myriad of state and federal laws and regulations to ensure that their products are safe for the environment and human health, and are effective in maintaining a safe, sanitary and healthful conditions whether it be where we work, learn or play.</p>

                            <p>Despite the extensive body of existing regulations, chemical cleaners continue to be the target of proposed new laws such as packaging restrictions, ingredient disclosure, “end of life cycle” disposal, and chemical management generally.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChemicalRegulation