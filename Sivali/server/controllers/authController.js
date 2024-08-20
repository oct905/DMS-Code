
class authController {
    static async loginClient(req, res, next) {
        try {
            res.status(200).json({
                message: 'Login success'
            })
        } catch (error) {
            next(error)
        }
    }
    static async registerClient(req, res, next) {
        try {
            res.status(200).json({
                message: 'Register success'
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = authController