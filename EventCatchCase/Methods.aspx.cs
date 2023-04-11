using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace EventCatchCase
{
    public partial class Methods : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static void writeCatchEvent(string stUserAct)
        {
            string a = "";

            string fileName = @"D:\Logs.txt";

            string writeText = stUserAct;

            FileStream fs = new FileStream(fileName, FileMode.OpenOrCreate, FileAccess.Write);
            fs.Close();
            File.AppendAllText(fileName, Environment.NewLine + writeText);
            
        }
    }
}