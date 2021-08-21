**<center>NGUỒN: ĐỀ THI CHỌN ĐỘI TUYỂN DỰ THI HỌC SINH GIỎI QUỐC GIA - 2020 - HẢI PHÒNG</center>**

Cho dãy ~n~ số nguyên dương ~a={a_1,a_2,…,a_n}\ (1≤a_i≤10^9)~. Ta định nghĩa dãy tích chênh lệch của dãy trên là một dãy ~b_1,b_2,…,b_n~ trong đó:
~~b_i=∏_{j=1}^n (a_i-a_j )\ (j≠i)~~

Tức ~b_i=(a_i-a_1 )×(a_i-a_2 )×…×(a_i-a_j )×…×(a_i-a_n)~ với ~1≤j≤n,j≠i~ (nếu không có chỉ số ~j\ne i~ thì ~b_i=1~).

Từ dãy ~b_1,b_2,…,b_n~, ta có một xâu ~st~ tương ứng có ~n~ ký tự chỉ gồm ~3~ kí tự ~`+`,`-`~ hoặc ~`0`~ phụ thuộc vào dấu của dãy ~b_1,b_2,…,b_n~. Cụ thể:
- ~st[i]=`+`~ nếu ~b_i>0~;
~st[i] = `-`~ nếu ~b_i<0~;
- ~st[i]=`0`~ nếu ~b_i=0~.

**Ví dụ:** Cho dãy ~a={1;2;3;1}~
~b_1=(a_1-a_2 )×(a_1-a_3 )×(a_1-a_4 )=(1-2)×(1-3)×(1-1)=0~;
~b_2=(a_2-a_1 )×(a_2-a_3 )×(a_2-a_4 )=(2-1)×(2-3)×(2-1)=-1~;
~b_3=(a_3-a_1 )×(a_3-a_2 )×(a_3-a_4 )=(3-1)×(3-2)×(3-1)=4~;
~b_4=(a_4-a_1 )×(a_4-a_2 )×(a_4-a_3 )=(1-1)×(1-2)×(1-3)=0~.
Xâu ~st~ nhận được là ~`0-+0`~.

**Yêu cầu:** Cho xâu kí tự ~st~ gồm ~n~ ký tự ~`+`, `−`~ hoặc ~`0`~. Hãy tìm dãy ~n~ số nguyên dương ~a_1,a_2,…,a_n~ có thể sinh ra xâu ~st~ theo mô tả trên. Nếu có nhiều dãy thỏa mãn, in ra dãy có thứ tự từ điển nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên ~n\ (1≤n ≤50)~;
- Dòng thứ hai chứa xâu kí tự độ dài ~n~ chỉ gồm ~3~ kí tự ~`+`,`-`~ hoặc ~`0`~.

## Dữ liệu ra:
- Ghi ra dãy có thứ tự từ điển nhỏ nhất thỏa mãn hoặc in ra ~-1~ nếu không tồn tại dãy nào như vậy.

Các số trên một dòng phải ghi cách nhau bởi ít nhất một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
4
0-+0
```

#### Dữ liệu ra:
```
1 2 3 1
```

**Chú ý:** Nếu học sinh chỉ in kết quả ~-1~ trong tất cả các test thì không được điểm của bài toán.

## Giới hạn:
- ~20\%~ số test tương ứng với ~20\%~ số điểm có ~n≤8~;
- ~15\%~ số test khác ứng với ~15\%~ số điểm thỏa mãn điều kiện xâu nhập vào chỉ có ~1~ kí tự ~`0`~;
- ~15\%~ số test khác ứng với ~15\%~ số điểm thỏa mãn điều kiện xâu nhập vào không có kí tự ~`0`~;
- ~20\%~ số test khác ứng với ~20\%~ số điểm có ~n≤30~;
- ~30\%~ số test khác ứng với ~30\%~ số điểm có ~n≤50~.