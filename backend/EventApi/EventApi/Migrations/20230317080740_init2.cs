using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EventApi.Migrations
{
    /// <inheritdoc />
    public partial class init2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_Users_UserNameU_Id",
                table: "Events");

            migrationBuilder.DropIndex(
                name: "IX_Events_UserNameU_Id",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "U_Id",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "UserNameU_Id",
                table: "Events");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "U_Id",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<long>(
                name: "UserNameU_Id",
                table: "Events",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Events_UserNameU_Id",
                table: "Events",
                column: "UserNameU_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Users_UserNameU_Id",
                table: "Events",
                column: "UserNameU_Id",
                principalTable: "Users",
                principalColumn: "U_Id");
        }
    }
}
