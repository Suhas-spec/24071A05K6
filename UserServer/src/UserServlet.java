import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class UserServlet extends HttpServlet {

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String age = request.getParameter("age");

        out.println("<html><body>");
        out.println("<h2>Entered User Details</h2>");

        out.println("<table border='1'>");
        out.println("<tr><th>Name</th><th>Email</th><th>Age</th></tr>");
        out.println("<tr>");
        out.println("<td>" + name + "</td>");
        out.println("<td>" + email + "</td>");
        out.println("<td>" + age + "</td>");
        out.println("</tr>");
        out.println("</table>");

        out.println("<br><hr>");
        out.println("<footer>Roll No: YOUR_ROLL_NUMBER</footer>");

        out.println("</body></html>");
    }
}
