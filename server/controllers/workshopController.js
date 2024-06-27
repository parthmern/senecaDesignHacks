

const createWorkshop = async (req, res) =>{
    try{

        
        

    }
    catch(error){
        console.log("🚫 createWorkshop error=>", error);

        return res.status(500).json({
            success: false,
            message: "createWorkshop Failed",
        });
    }
}