**<center>TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XⅤ (SƠN LA 2019)</center>**
<br>
Mộc Châu là một điểm du lịch nổi tiếng của tỉnh Sơn La với nhiều thắng cảnh đẹp. Đặc biệt, dọc trên trục đường quốc lộ $6$ người ta trồng rất nhiều cây đào và mận đan xen nhau. Đến mùa đông, hoa đào đỏ và hoa mận trắng nở xen kẽ nhau rất đẹp. Trên tuyến đường này người ta đếm được có $N$ cây đào và mận được đánh số từ $1$ đến $N$, cây thứ $i$ người ta đánh giá được có độ đẹp là số nguyên $A_i\ (1≤i≤N)$. Rất nhiều du khách đến đây vào mùa hoa đã muốn dùng Flycam để chụp những bức ảnh đẹp. Một bức ảnh đẹp là một bức ảnh chụp được một đoạn liên tiếp các cây đào và mận thỏa mãn:
- Có tối thiểu $4$ cây
- Số cây đào và mận bằng nhau

Độ đẹp của bức ảnh được tính bằng tổng độ đẹp của các cây có trong bức ảnh đó.

**Yêu cầu**: Hãy tính độ đẹp lớn nhất của bức ảnh có thể chụp được.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $N\ (4≤N≤3.10^5)$
- Dòng thứ hai chứa $N$ số nguyên $A_1,A_2,…,A_N\  \left(|A_i |≤10^9\text{  với }1≤i≤N\right)$.

Hai số liên tiếp được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là độ đẹp lớn nhất của một bức ảnh có thể chụp được.

## Ví dụ:
### Dữ liệu vào:
```
6
-4 3 -2 -6 7 2
```

### Dữ liệu ra:
```
2
```
### Giải thích:
- Chụp $4$ cây số $2, 3, 4, 5$ sẽ có độ đẹp là $3 + (-2) + (-6) + 7 = 2$

## Giới hạn:
- Có $40\%$ số test tương ứng $40\%$ số điểm có $N≤300$
- Có $40\%$ số test khác tương ứng $40\%$ số điểm có $300<N≤5000$
- $20\%$ số test còn lại tương ứng $20\%$ số điểm có  $5000<N≤3.10^5$