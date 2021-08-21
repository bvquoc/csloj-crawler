<!--**<center>NGUỒN: ĐỀ THI CHỌN ĐỘI TUYỂN HSGQG NĂM 2018 - 2019 - HÀ NAM</center>**-->

Dãy con của một dãy cho trước thu được bằng cách giữ nguyên thứ tự và xóa một số phần từ của dãy đó.

Cho hai dãy số nguyên ~a_1, a_2,…,a_n~ và ~b_1, b_2,…,b_m~. Dãy ~c_1, c_2,…,c_k~ được gọi là đẹp nếu nó thỏa mãn các điều kiện sau:
- ~k~ lẻ;
- ~c_{2×j-1}<c_{2×j}~ và ~c_{2×j+1} < c_{2×j}~ với ~∀j:1< 2×j < k~;
- ~c_1, c_2,…,c_k~ là dãy con của dãy ~a_1, a_2,…,a_n~;
- ~c_1, c_2,…,c_k~ là dãy con của dãy ~b_1, b_2,…,b_m~.

**Yêu cầu:** Tìm độ dài lớn nhất của dãy con đẹp và số lượng dãy con đẹp khác nhau có độ dài lớn nhất.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n\ (1≤n≤10000)~;
- Dòng thứ hai ghi ~n~ số nguyên ~a_1,a_2,…,a_n\ (1≤a_i≤20000,i=1..n)~;
- Dòng thứ ba chứa số nguyên dương ~m\ (1≤m≤10000)~;
- Dòng cuối ghi ~m~ số nguyên ~b_1,b_2,…,b_m\ (1≤b_i≤20000,i=1..m)~.

## Dữ liệu ra:
- Ghi một dòng gồm hai số là độ dài lớn nhất của dãy con đẹp và số lượng dãy con đẹp khác nhau có độ dài lớn nhất theo modulo ~10^9+9~. Trong trường hợp không có câu trả lời, dữ liệu in ra hai số ~0\ 0~.

## Ví dụ:
#### Dữ liệu vào:
```
7
1 5 3 4 2 5 2
5
1 3 5 4 2
```

#### Dữ liệu ra:
```
3 6
```

**Chú ý:** Thí sinh được một nửa số điểm của mỗi test nếu trả lời đúng một trong hai đáp số của test đó.

## Giới hạn:
- ~25\%~ tổng số điểm có ~1≤n≤20,1≤m≤10~;
- ~25\%~ tổng số điểm tiếp theo có ~1≤n≤1000,1≤m≤20~;
- ~25\%~ tổng số điểm tiếp theo có ~1≤n,m≤500~;
- ~25\%~ tổng số điểm còn lại có ~1≤n,m≤10^4~.