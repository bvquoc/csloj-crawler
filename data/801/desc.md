**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XII (BẮC GIANG 2016)</center>**
<br>

Giáo sư Thuấn mới tìm ra loại số rất đặc biệt và đặt tên là số **DMT**. Một số nguyên dương $n$ được gọi là số **DMT** nếu $n$ thỏa mãn hai tính chất sau:

- $n$ chia hết cho $3$;
- $n$ có đúng $9$ ước số nguyên dương.

Giáo sư muốn khảo sát mật độ các số **DMT** nên nhờ các bạn tham gia thi chọn học sinh giỏi Trại hè Hùng Vương lập trình giải quyết bài toán sau: “Cho hai số nguyên không âm $a,b$, hãy đếm số lượng số **DMT** trong đoạn $\left[a,b\right]$.”

## Dữ liệu vào:
- Dòng đầu chứa số nguyên $T$ là số bộ dữ liệu;
- $T$ dòng sau, mỗi dòng chứa hai số nguyên dương $a,b$.
Hai số liên tiếp trên cùng dòng được ghi cách nhau bởi dấu cách.  

## Dữ liệu ra:
- Ghi ra $T$ dòng, mỗi dòng là số lượng số **DMT** trong đoạn  $\left[a,b\right]$ tương ứng với bộ dữ liệu vào.

## Ví dụ:
### Dữ liệu vào:
```
2
1 10
220 230
```

## Dữ liệu ra:
```
0
1
```

## Ràng buộc:
- Có $25\%$ số test ứng với $25\%$ số điểm của bài có $a,b≤ 10^3; T= 1$;
- Có $25\%$ số test khác ứng với $25\%$ số điểm của bài có $a,b≤ 10^3; T ≤ 1000$;
- Có $25\%$ số test khác ứng với $25\%$ số điểm của bài $a,b≤ 10^6; T=1$;
- Có $25\%$ số test khác ứng với $25\%$ số điểm còn lại của bài có $a,b≤ 10^{12}; T ≤ 10^6$.