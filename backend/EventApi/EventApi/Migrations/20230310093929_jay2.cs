using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EventApi.Migrations
{
    /// <inheritdoc />
    public partial class jay2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_Users_UserU_Id",
                table: "Events");

            migrationBuilder.RenameColumn(
                name: "UserU_Id",
                table: "Events",
                newName: "UserNameU_Id");

            migrationBuilder.RenameIndex(
                name: "IX_Events_UserU_Id",
                table: "Events",
                newName: "IX_Events_UserNameU_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Users_UserNameU_Id",
                table: "Events",
                column: "UserNameU_Id",
                principalTable: "Users",
                principalColumn: "U_Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_Users_UserNameU_Id",
                table: "Events");

            migrationBuilder.RenameColumn(
                name: "UserNameU_Id",
                table: "Events",
                newName: "UserU_Id");

            migrationBuilder.RenameIndex(
                name: "IX_Events_UserNameU_Id",
                table: "Events",
                newName: "IX_Events_UserU_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Users_UserU_Id",
                table: "Events",
                column: "UserU_Id",
                principalTable: "Users",
                principalColumn: "U_Id");
        }
    }
}
