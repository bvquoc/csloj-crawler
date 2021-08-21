<!--
**<center>NGUỒN: VOI Training Camp 3H (Ngày 01/11/2016)</center>**
-->

Cho dãy số nguyên dương ~a_1,a_2,…,a_n~. Một dãy con gồm các phần tử liên tiếp của dãy trên được gọi là tốt nếu như số lượng phần tử lớn hơn ~1~ và bội chung nhỏ nhất của tất cả các số trong dãy này đúng bằng tích của chúng.

**Yêu cầu**: Hãy tìm dãy tốt có độ dài lớn nhất

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~T~ là số lượng bộ dữ liệu ~\left(1≤T≤50\right)~.
- Mỗi bộ dữ liệu được mô tả bằng hai dòng, dòng đầu tiên ghi số nguyên dương ~n~, dòng thứ hai ghi ~n~ số nguyên ~a_1,a_2,…,a_n~

## Dữ liệu ra:
- In ra ~T~ dòng là kết quả của mỗi bộ dữ liệu - độ dài lớn nhất của dãy con tốt. Nếu như không có dãy con tốt thì in ra ~-1~

## Ví dụ:
#### Dữ liệu vào:
```
3
2
7 2
4
2 2 3 4
3
2 2 4
```

#### Dữ liệu ra:
```
2
2
-1
```

## Giới hạn:
- Subtask #~1~: ~20\%~ số điểm có ~n≤5000,1≤a_i≤10~
- Subtask #~2~: ~40\%~ số điểm có ~n≤5000,1≤a_i≤10^6~
- Subtask #~3~: ~40\%~ số điểm có ~n≤10^5,1≤a_i≤10^6~