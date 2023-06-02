using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EventApi.Migrations
{
    /// <inheritdoc />
    public partial class jay : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ContactNumber",
                table: "Join",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "U_Id",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<long>(
                name: "UserU_Id",
                table: "Events",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Events_UserU_Id",
                table: "Events",
                column: "UserU_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Users_UserU_Id",
                table: "Events",
                column: "UserU_Id",
                principalTable: "Users",
                principalColumn: "U_Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_Users_UserU_Id",
                table: "Events");

            migrationBuilder.DropIndex(
                name: "IX_Events_UserU_Id",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "ContactNumber",
                table: "Join");

            migrationBuilder.DropColumn(
                name: "U_Id",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "UserU_Id",
                table: "Events");
        }
    }
}
