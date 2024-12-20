
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

//Animations for Team Members
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseover', () => {
        member.style.transform = 'translateY(-10px)';
        member.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        member.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });

    member.addEventListener('mouseleave', () => {
        member.style.transform = 'translateY(0)';
        member.style.boxShadow = 'none';
    });
});
