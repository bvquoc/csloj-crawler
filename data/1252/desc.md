**<center>Nguồn: Đề ôn ĐTQG - Lương Văn Tụy - Ninh Bình</center>**

XYZ là một công ty lớn trong lĩnh vực công nghệ phần mềm và tới đây họ chuẩn bị thực hiện một dự án lớn có thể thu lại lợi nhuận khổng lồ cho công ty. XYZ gồm ~n~ nhân viên, các nhân viên được đánh số từ ~1~ đến ~n~, nhân viên thứ ~i~ có một chỉ số năng lực đúng bằng ~i~. Tổ chức nhân sự của công ty XYZ có dạng đồ thị cây. Mỗi nhân viên có đúng một cấp trên trực tiếp, có một nhân viên duy nhất là tổng giám đốc, không ai là cấp trên của nhân viên này. Ta gọi nhân viên ~i~ là cấp trên của nhân viên ~j~ nếu nhân viên ~i~ là cấp trên trực tiếp của nhân viên ~j~, hoặc nhân viên ~i~ là cấp trên của nhân viên ~u~ và nhân viên ~u~ là cấp trên trực tiếp của nhân viên ~j~.

Để chuẩn bị tốt việc phân công công việc trong dự án lớn sắp tới, ban lãnh đạo công ty muốn đếm số cặp nhân viên hoàn hảo trong công ty. Hai nhân viên ~i~ và ~j~ là một cặp đôi hoàn hảo nếu họ thỏa mãn hai điều kiện sau:
- ~i~ là cấp trên của ~j~;
- Chênh lệch năng lực giữa hai nhân viên không vượt quá ~k~, tức là ~|i-j|≤k~.

**Yêu cầu:** Bạn hãy giúp ban lãnh đạo công ty XYZ đếm số cặp đôi hoàn hảo này.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~n,k\ (1 ≤  n, k ≤  10^5)~;
- ~n-1~ dòng tiếp theo, mỗi dòng chứa hai số nguyên ~u, v\ (1 ≤  u, v ≤ n)~ miêu tả mối quan hệ nhân viên ~u~ là cấp trên trực tiếp của nhân viên ~v~. Dữ liệu đảm bảo các mối quan hệ trong công ty tạo thành một cấu trúc cây.

## Dữ liệu ra:
- Ghi ra một dòng duy nhất là kết quả của bài toán.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
3 2
3 1
1 4
1 5
```

#### Dữ liệu ra:
```
4
```

#### Dữ liệu vào:
```
10 2
1 4
1 5
2 8
2 9
3 1
3 2
6 3
7 6
8 10
```

#### Dữ liệu ra:
```
12
```

## Ràng buộc:
- Có ~30\%~ số điểm ứng với ~n ≤ 300~;
- Có ~30\%~ số điểm khác ứng với ~n ≤ 5000~;
- Có ~40\%~ số điểm còn lại ứng với ~n ≤ 10^5~.