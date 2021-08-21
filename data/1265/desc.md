**<center>NGUỒN: Bài tập Đội Bắc Giang ôn thầy Đỗ Đức Đông - Tháng 10/2017</center>**

Cho $𝑛$ vector, mỗi vector có đúng $𝑚$ thành phần. Vector $𝑈(𝑢_1, 𝑢_2, … , 𝑢_𝑚)$ được gọi “bé hơn” vector $𝑉(𝑣_1, 𝑣_2, … , 𝑣_𝑚)$, ký hiệu $𝑈 < 𝑉$, nếu tồn tại $(α_1, α_2, … , α_𝑚 )$ là hoán vị của $𝑚$ thành phần vector $𝑈$ và $(β_1, β_2, … , β_𝑚)$ là hoán vị của $𝑚$ thành phần vector $𝑉$ sao cho $α_𝑖 < β_𝑖, ∀𝑖 = 1,2, … , 𝑚$.

**Ví dụ 1**, vector $(1,3)$ được gọi là bé hơn vector $(5,2)$ vì tồn tại $(1,3)$ là hoán vị của $(1,3)$ và $(2,5)$ là hoán vị của $(5,2)$ mà $1 < 2, 3 < 5$.

**Ví dụ 2**, vector $(4,1,3)$ được gọi là bé hơn vector $(4,3,5)$ vì tồn tại $(4,1,3)$ là hoán vị của $(4,1,3)$ và $(5,3,4)$ là hoán vị của $(4,3,5)$ mà $4 < 5, 1 < 3, 3 < 4$.

**Yêu cầu:** Cho $𝑛$ vector $𝑈_1, 𝑈_2, … , 𝑈_𝑛$, mỗi vector có đúng $𝑚$ thành phần. Hãy tìm dãy chỉ số $1 ≤ 𝑖_1 < 𝑖_2 < ⋯ < 𝑖_𝑘 ≤ 𝑛$ sao cho $𝑈_{𝑖_1} < 𝑈_{𝑖_2} < ⋯ < 𝑈_{𝑖_𝑘}$ mà $𝑘$ lớn nhất có thể.

## Dữ liệu vào:
- Dòng đầu ghi hai số $𝑛, 𝑚$;
- Dòng thứ $𝑖\ (𝑖 = 1,2, … , 𝑛)$ trong $𝑛$ dòng tiếp theo chứa $𝑚$ số nguyên không âm có giá trị không vượt quá $10^9$ mô tả $𝑚$ thành phần của vector thứ $𝑖$.

## Dữ liệu ra:
-  Ghi ra một số nguyên là giá trị $𝑘$ lớn nhất tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
4 1
1
5
3
5
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
4 2
1 2
5 2
3 2
5 2
```

#### Dữ liệu ra:
```
2
```

## Giới hạn:
- Có $20\%$ số test ứng với $20\%$ số điểm của bài có $𝑛 ≤ 20, 𝑚 = 1$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm của bài có $𝑛 ≤ 10^3, 𝑚 = 1$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm của bài có $𝑛 ≤ 20, 𝑚 = 2$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm của bài có $𝑛 ≤ 10^3, 𝑚 = 2$;
- Có $10\%$ số test khác ứng với $10\%$ số điểm của bài có $𝑛 ≤ 10^5, 𝑚 = 1$;
- Có $10\%$ số test còn lại ứng với $10\%$ số điểm của bài có có $𝑛 ≤ 10^3, 𝑚 ≤ 20$.