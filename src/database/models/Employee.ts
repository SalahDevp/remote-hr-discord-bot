import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../config";
import { EmployeeAttributes, EmployeeInput } from "../types";


class Employee extends Model<EmployeeAttributes, EmployeeInput> {
  public id!: number
  public guild_id!: string
  public user_id!: number
  public first_name!: string
  public last_name!: string
  public email!: string
  public company_id!: number

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}



Employee.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  guild_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    unique: true
  },

  email: {
    type: DataTypes.TEXT,
    unique: true
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: "employees",
  timestamps: true,
  sequelize: sequelizeConnection,
  paranoid: true
})

export default Employee;
