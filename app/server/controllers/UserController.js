import UserModel from '../models/userModel.js';


// get a user from the

export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id)

        if (user) {

            const {password, ...otherDetails} = user._doc
            res.status(200).json(otherDetails);
        }

    } catch (error) {

        res.status(500).json(error)
    }


}