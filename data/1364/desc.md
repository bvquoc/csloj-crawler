<!--
**<center>Nguồn: Đề CHỌN ĐỘI TUYỂN HSG QUỐC GIA NĂM HỌC 2020 - 2021 - HƯNG YÊN</center>**
-->

Trên đường thẳng có $n$ đoạn thẳng liên tiếp nhau độ dài nguyên và được tô trắng đen đan xen. Cứ mỗi giây người ta thực hiện một phép biến đổi như sau: chọn đoạn thẳng dài nhất (nếu tồn tại nhiều đoạn dài nhất thì chọn đoạn trái nhất), chia đôi đoạn thẳng thành hai phần trái và phải, tô lại đoạn được chọn theo quy tắc sau:
- Nếu đoạn được chọn có màu trắng thì tô lại phần bên phải thành màu đen;
- Nếu đoạn được chọn có màu đen thì tô lại phần bên trái thành màu trắng.
<center><img src="/images/problems/1364/BLACKWHITE.svg" width="800px" /></center>

Những đoạn thẳng cùng màu kề nhau được hợp nhất thành một đoạn thẳng. Nếu độ dài đoạn thẳng là lẻ thì một phần sẽ là phần nguyên của độ dài ban đầu chia đôi, phần kia có độ dài còn lại, phần giữ nguyên màu có độ dài lớn hơn.

Quá trình biến đổi kết thúc khi các đoạn thẳng có độ dài bằng $1$ hoặc một cấu hình các đoạn thẳng được lặp lại lần thứ $2$.

**Yêu cầu:** Cho $n$, các độ dài các đoạn thẳng và số nguyên $t$. Hãy xác định thời gian biến đổi hay đưa ra số nguyên $t$, nếu sau $t$ giây quá trình biến đổi chưa kết thúc.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $n$ và $t\ (n, t \le 10^5)$;
- Dòng thứ hai chứa từ `white` hoặc `black` xác định màu của đoạn đầu tiên;
- Dòng thứ ba chứa $n$ số nguyên xác định độ dài các đoạn thẳng.

## Dữ liệu ra:
- Đưa ra một số nguyên – thời gian tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
2 4
white
5 4
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
3 100
black
2 9 10
```

#### Dữ liệu ra:
```
4
```

## Giối hạn:
- $40\%$ số test tương ứng $40\%$ số điểm có $n×t≤5×10^7$.