import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class User extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    organization: string;

    @Column
    username: string;

    @Column
    email: string;

    @Column({ defaultValue: true })
    isActive: boolean;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    createdAt: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    updatedAt: Date;
}