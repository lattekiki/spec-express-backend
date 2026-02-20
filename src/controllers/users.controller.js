exports.getALLUsers = async (req, res, next) => {
    try{
        const users=[];
        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    }
    catch(error){
        next(error);
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        const { id } = req.params; 
        res.status(200).json({
            success: true,
            userId: id
        });
    } catch (error) {
        next(error);
    }
};

exports.createUser = async (req, res, next) => {
    try{
        const userData = req.body;
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: userData
        });
    }
    catch(error){
        next(error);
    }}

exports.updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        res.status(200).json({
            success: true,
            message: `User ${id} has been updated`,
            updatedFields: updatedData
        });
    } catch (error) {
        next(error);
    }
};


exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        res.status(200).json({
            success: true,
            message: `User ${id} has been deleted`
        });
    } catch (error) {
        next(error);
    } }