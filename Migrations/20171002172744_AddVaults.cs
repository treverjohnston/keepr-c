using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace keepr.Migrations
{
    public partial class AddVaults : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Keeps_AspNetUsers_UserId",
                table: "Keeps");

            migrationBuilder.DropIndex(
                name: "IX_Keeps_UserId",
                table: "Keeps");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Keeps",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<int>(
                name: "VaultId",
                table: "Keeps",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Vaults",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vaults", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vaults_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Keeps_VaultId",
                table: "Keeps",
                column: "VaultId");

            migrationBuilder.CreateIndex(
                name: "IX_Vaults_UserId",
                table: "Vaults",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Keeps_Vaults_VaultId",
                table: "Keeps",
                column: "VaultId",
                principalTable: "Vaults",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Keeps_Vaults_VaultId",
                table: "Keeps");

            migrationBuilder.DropTable(
                name: "Vaults");

            migrationBuilder.DropIndex(
                name: "IX_Keeps_VaultId",
                table: "Keeps");

            migrationBuilder.DropColumn(
                name: "VaultId",
                table: "Keeps");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Keeps",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Keeps_UserId",
                table: "Keeps",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Keeps_AspNetUsers_UserId",
                table: "Keeps",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
