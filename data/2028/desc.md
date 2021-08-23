**<center>Nguồn:  Free Contest 05</center>**

Mô tả sau đây cho biết thông tin của một ngôn ngữ được người ngoài hành tinh sử dụng:
- Tất cả các từ có chính xác $K$ chữ cái, mỗi từ chỉ được viết từ các chữ cái $A$ và $B$;
- Theo phong tục cổ, có một số từ bị cấm (tất cả các từ bị cấm có độ dài như nhau), và nó không được phép xuất hiện trong bất kì từ nào như một xâu con liên tiếp;
- Người ngoài hành tinh lập một cuốn từ điển dựa theo những từ được phép sử dụng. Họ đánh số trang bắt đầu từ $0$ và viết các từ đó theo thứ tự từ điển tăng dần, mỗi từ $1$ trang.

**Yêu cầu:** có một số truy vấn hỏi vào một trang $S$ nào đó, và bạn cần viết chương trình đưa ra từ nằm tại trang $S$.

**Lưu ý:** Để giảm kích thước dữ liệu vào, các từ bị cấm được chia thành các nhóm. Mỗi nhóm sẽ được mô tả bằng một xâu kí tự chỉ gồm các chữ cái $A$, $B$, $?$, trong đó kí tự $?$ có thể thay thế cho cả $A$ và $B$. Ví dụ, xâu $A?B$ mô tả có $2$ từ bị cấm là $AAB$ và $ABB$, trong khi xâu $??$ mô tả $4$ từ bị cấm là $AA$, $AB$, $BA$ và $BB$.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $K\ (1 ≤ K ≤ 50)$ là độ dài của mỗi từ đang được sử dụng bởi người ngoài hành tinh;
- Dòng thứ hai chứa số nguyên $M\ (0 ≤ M ≤ 50)$ là số nhóm từ bị cấm;
- Dòng thứ ba chứa $M$ xâu kí tự có độ dài như nhau và không quá $17$, gồm các kí tự $A, B, ?$ mô tả danh sách các từ đó. Các xâu được cách nhau bằng một dấu cách;
- Dòng thứ tư chứa số nguyên $Q\ (1 ≤ Q ≤ 50)$ là số truy vấn;
- Dòng thứ năm chứa $Q$ số nguyên trong khoảng $[0, 10^9]$ thể hiện $Q$ truy vấn cần trả lời.

## Dữ liệu ra:
Đưa ra $Q$ dòng, mỗi dòng là câu trả lời với truy vấn tương ứng:
- Nếu đáp số tồn tại, hãy viết ra từ tương ứng;
- Nếu đáp số không tồn tại, hãy viết ra `NOPAGE`.

## Ví dụ:
### Dữ liệu vào:
```
5
2
?AA ABB
5
4 12 0 6 9
```

### Dữ liệu ra:
```
BBBAB
NOPAGE
AABAB
BBBBB
NOPAGE
```

### Dữ liệu vào:
```
3
0

5
1 4 7 5 1
```

### Dữ liệu ra:
```
AAB
BAA
BBB
BAB
AAB
```

### Dữ liệu vào:
```
10
5
BABB? ??A?B A?AAA A??AB ?A??A
2
0 1
```

### Dữ liệu ra:
```
AABBBABABA
AABBBBABAB
```