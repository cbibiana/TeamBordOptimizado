import role from "../models/role.js";

const admin = async (req, res, next) => {
  const adminRole = await role.findById(req.user.role);
  if (!adminRole) return res.status(400).send({ message: "Role no found" });

  if (adminRole.name === "admin") {
    req.user.roleName = adminRole.name;
    next();
  } else {
    return res.status(400).send({ message: "Unauthorized user" });
  }
};

export default admin;