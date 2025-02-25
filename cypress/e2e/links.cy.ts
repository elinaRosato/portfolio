describe("Navigation Links Test", () => {
  beforeEach(() => {
    cy.visit("/"); // Visit the homepage before each test
  });

  it("Header menu links navigate to correct sections", () => {
    const sections = ["about", "cases", "projects", "services", "contact"];
    cy.viewport(375, 667);

    sections.forEach((section) => {
      cy.get('#hamb-menu').click();
      cy.get(`a[href="/#${section}"]`).click();
      cy.url().should("include", `/#${section}`);
      cy.get(`#${section}`).should("be.visible");
    });
  });

  it("Footer internal links navigate to correct sections", () => {
    const sections = ["about", "cases", "projects", "services", "contact"];
    
    sections.forEach((section) => {
      cy.get(`footer a[href="#${section}"]`).click();
      cy.url().should("include", `/#${section}`);
      cy.get(`#${section}`).should("be.visible");
    });
  });

  it("Footer case study links navigate correctly", () => {
    const caseStudies = ["haparanda", "3dcenter", "orthoteam", "baccello"];
    
    caseStudies.forEach((caseName) => {
      // Intercept the request for the case study page
      cy.intercept('GET', `/cases/${caseName}`).as('projectRequest');

      cy.get(`footer a[href="/cases/${caseName}"]`).click();

      // Wait for the request to complete and check the status code
      cy.wait('@projectRequest').then((interception) => {
        if (interception.response) {
          expect(interception.response.statusCode).to.eq(200);
        } else {
          throw new Error(`Failed to intercept response for /cases/${caseName}`);
        }
      });

      // Assert that the correct URL is loaded and the page is displayed
      cy.url().should("include", `/cases/${caseName}`);
      cy.go("back");
    });
  });

  it("Footer personal project links navigate correctly", () => {
    const projects = ["poppingbubbles", "phonebook", "todolist"];
    
    projects.forEach((project) => {
      // Intercept the request for the project page
      cy.intercept('GET', `/projects/${project}`).as('projectRequest');

      cy.get(`footer a[href="/projects/${project}"]`).click();

      // Wait for the request to complete and check the status code
      cy.wait('@projectRequest').then((interception) => {
        if (interception.response) {
          expect(interception.response.statusCode).to.eq(200);
        } else {
          throw new Error(`Failed to intercept response for /projects/${project}`);
        }
      });

      // Assert that the correct URL is loaded and the page is displayed
      cy.url().should("include", `/projects/${project}`);
      cy.go("back");
    });
  });
});

