**<center>NGUỒN: Bài tập Đội Bắc Giang ôn thầy Đỗ Đức Đông - Tháng 10/2017</center>**

Xét bảng số gồm ~2 × 𝑛~ ô, mỗi ô chứa một số nguyên có giá trị nằm trong đoạn ~[-10, 10]~.

**Ví dụ:**
<center><img src="/images/problems/1261/game1.svg" with="600px" /></center>

Ta gọi điểm của bảng là tổng tất cả các tích của số trên dòng ~1~ với số trên dòng ~2~ tương ứng (cùng cột). Với bảng trên thì điểm bằng:
~(-3)×(0) + (-1)×(-3) + (-2)×(2) + (0)×(4) + (5)×(0) +(-1)×(5) + (0)×(-2) = -6~

Ta có loại phép biến đổi bảng như sau: Tráo hai ô liên tiếp trên cùng một dòng cho nhau, điều kiện để thực hiện được phép tráo là một ô phải khác ~0~ và ô còn lại phải bằng ~0~.

**Yêu cầu:** Cho bảng số, hãy biến đổi bảng để được bảng có điểm là lớn nhất.

## Dữ liệu vào:
- Dòng đầu là số ~𝑛\ (𝑛 ≤ 200)~;
- Dòng thứ hai chứa ~𝑛~ số nguyên là ~𝑛~ số được ghi trên dòng ~1~ của bảng số;
- Dòng thứ ba chứa ~𝑛~ số nguyên là ~𝑛~ số được ghi trên dòng ~2~ của bảng số.

## Dữ liệu ra:
- Gồm một số duy nhất là tổng điểm lớn nhất đạt được.

## Ví dụ:
#### Dữ liệu vào:
```
7
-3 -1 -2 0 5 -1 0
0 -3 2 4 0 5 -2
```

#### Dữ liệu ra:
```
36
```

#### Giải thích:
Ta đưa bảng về như hình dưới đây:
<center><img src="/images/problems/1261/game2.svg" with="500px" /></center>
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)