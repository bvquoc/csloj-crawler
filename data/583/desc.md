**<center>NGUỒN: ĐỀ THI CHỌN HỌC SINH GIỎI THPT CẤP TỈNH - NĂM HỌC 2019 – 2020</center>**

Tí có một bộ đồ chơi gồm $N$ khối hộp được đánh số từ $1$ đến $N$. Khối hộp thứ $i$ là một hình hộp chữ nhật có kích thước $a_i×b_i×1$ ($1≤b_i≤a_i,a_i×b_i$ là mặt đáy, chiều cao luôn là $1$). Tí muốn dùng các khối hộp trong bộ đồ chơi của mình để xếp thành một tháp hộp cao nhất có thể, thỏa mãn các điều kiện:
- Các khối tiếp xúc nhau theo mặt đáy;
- Nếu khối dưới có mặt đáy là $a×b$ và khối trên có mặt đáy là $a'× b'$ thì $a>a'$ và $b>b'$.

**Yêu cầu:** Cho biết $N$ và kích thước các khối hộp, hãy giúp Tí tính chiều cao lớn nhất của tháp hộp xếp được.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $N$;
- Dòng thứ $i$ trong số $N$ dòng tiếp theo chứa hai số nguyên dương $a_i,b_i\  (1≤b_i≤a_i≤10^6)$ được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là chiều cao lớn nhất của tháp hộp xếp được.

## Ví dụ:
#### Dữ liệu vào:
```
3
3 2
3 3
4 3
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
- Xếp khối hộp thứ nhất chồng lên khối hộp thứ ba ta được tháp hộp có chiều cao bằng $2$.

## Giới hạn:
- $40\%$ số điểm của bài có $1≤N≤20$;
- $30\%$ số điểm khác có $20<N≤1000$;
- $10\%$ số điểm còn lại có $1000<N≤100000$.