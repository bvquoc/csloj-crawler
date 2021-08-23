**<center>Nguồn: Beginner Free Contest 2</center>**

Không khí Noel đang bắt đầu xuất hiện dần dần ở thị trấn Free Contest. Trong thị trấn có một chàng trai trẻ tên là Nhân đang thầm thích một cô gái bằng tuổi. Nhân băn khoăn không biết nên mua gì tặng cho cô ấy. Trong một khoảnh khắc lóe sáng trong đầu, Nhân nảy ra ý tưởng tặng một tấm thiệp chúc mừng Giáng sinh siêu lớn có kích thước $H×W$ thõa mãn $H_{min} ≤ H ≤ H_{max}, W_{min} ≤ W ≤ W_{max}$.

Khi Nhân đến cửa hàng Free Shoptest để mua thiệp thì mới nhận ra là cửa hàng chỉ có bán những tấm thiệp hình vuông kích thước $T×T$. Trong lúc đang buồn vì có thể không mua được tấm thiệp ưng ý của mình, Nhân bắt gặp Khoa, một người bạn học của Nhân, cũng đang ở trong cửa hàng này và đang mua giấy về xếp hạc giấy. Nhân vô tình nhớ lại câu chuyện một nghìn con hạc giấy và quyết định làm một điều tương tự.

Nhân quyết định mua những tấm thiệp có cùng kích thước với nhau sao cho khi ghép chúng sát vào nhau sẽ thu được siêu thiệp Giáng sinh kích thước $H ×W$ . Hay nói cách khác, nếu Nhân mua loại thiệp có kích thước $T×T$ thì phải thõa mãn $H⋮T$ và $W⋮T$. ($x⋮y$ có nghĩa là $x$ chia hết cho $y$)

Để chứng tỏ tình cảm mình giành cho cô ấy, Nhân quyết định sẽ mua tấm thiệp có kích thước lớn nhất có thể, tiền bạc là không quan trọng đối với Nhân khi sử dụng trong chuyện tình cảm. Bạn hãy giúp nhân tìm ra giá trị $T$ lớn nhất thõa mãn để Nhân tặng bạn gái ấy nhé.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $N$ là số lượng trường hợp mà Nhân nghĩ đến;
- $N$ dòng tiếp theo, mỗi dòng gồm $4$ số nguyên dương $H_{min}, H_{max}, W_{min}, W_{max}$.

## Dữ liệu ra:
- Ghi ra $N$ dòng, dòng thứ $i$ là kết quả của trường hợp thứ $i$ mà Nhân nghĩ đến.

## Ví dụ:
### Dữ liệu vào:
```
4
8 8 3 10
11 15 1 10
3 7 22 23
2 5 19 24
```

## Dữ liệu ra:
```
8
7
2
5
```

### Giải thích:
- Trường hợp $1:$ Thiệp $8×8$ có thể tạo siêu thiệp $8×8$
- Trường hợp $2:$ Thiệp $7×7$ có thể tạo siêu thiệp $14×7$
- Trường hợp $3:$ Thiệp $2×2$ có thể tạo siêu thiệp $4×22$
- Trường hợp $4:$ Thiệp $5×5$ có thể tạo siêu thiệp $5×20$

## Giới hạn:
- $N ≤ 1000; 1 ≤ H_{min} ≤ H_{max} ≤ 10^9; 1 ≤ W_{min} ≤ W_{max} ≤ 10^9$.