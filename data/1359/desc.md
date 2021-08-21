**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 2 Day 2- Hải Phòng 2020</center>**

Ngày xửa ngày xưa tại một vương quốc xa xôi, nơi quốc vương và các thần dân hằng năm đều tổ chức kỷ niệm ngày độc lập. Tuy nhiên đã từ rất lâu rồi, không ai còn nhớ chính xác ngày độc lập là ngày nào. Điều duy nhất mà họ nhớ là cho tới hôm nay, số ngày đã trôi qua tính từ ngày độc lập là một số chính phương ~D~. Hơn nữa, đây là số lớn nhất có thể mà có thể phân tích thành tích các số nguyên dương phân biệt nhỏ hơn hoặc bằng ~N~.

Một năm ở vương quốc có ~10^9+7~ ngày, vậy nên người dân chỉ cần số ~D\text{ mod }(10^9+7)~. Chú ý rằng cần tìm số ~D~ lớn nhất, không phải là ~D\text{ mod }(10^9+7)~ lớn nhất.

## Dữ liệu vào:
- Gồm nhiều test, mỗi test miêu tả bởi một dòng duy nhất chứa số nguyên dương ~N\ (N≤10^7)~. Dữ liệu kết thúc bởi một dòng chứa số ~0~.

## Dữ liệu ra:
- Với mỗi test in ra kết quả trên một dòng số ~D\text{ mod }(10^9+7)~.

## Ví dụ:
#### Dữ liệu vào:
```
4
9348095
6297540
0
```
#### Dữ liệu ra:
```
4
177582252
644064736
```