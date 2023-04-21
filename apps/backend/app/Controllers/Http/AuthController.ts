import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import LoginUserValidator from "../../Validators/Auth/LoginUserValidator";
import RegisterUserValidator from "../../Validators/Auth/RegisterUserValidator";
import User from "../../Models/User";

export default class AuthController {
  public async register({ request, auth }: HttpContextContract) {
    const payload = await request.validate(RegisterUserValidator);
    const newUser = await User.create(payload);
    return await auth.use("api").generate(newUser);
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(LoginUserValidator);

    try {
      return await auth.use("api").attempt(email, password);
    } catch {
      return response.unauthorized("Invalid credentials");
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use("api").revoke();
    return response.ok({
      revoke: true,
    });
  }
}
