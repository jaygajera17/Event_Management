using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EventApi.Migrations
{
    /// <inheritdoc />
    public partial class init3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "City",
                table: "Users",
                newName: "ContactNumber");

            migrationBuilder.AddColumn<bool>(
                name: "IsOrganiser",
                table: "Users",
                type: "bit",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsOrganiser",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "ContactNumber",
                table: "Users",
                newName: "City");
        }
    }
}
